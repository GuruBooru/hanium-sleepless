const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

var helmet = require('helmet'); // helmet보안 쪽인것 같은데 어떻게 쓰이는지 모르겠따
var express = require('express');

var fs = require('fs');
var multer = require('multer');
var md5File = require('md5-file');
// var filepath = require('filepath');
var vt = require('node-virustotal');
var virustotal = vt.MakePublicConnection();

var net = require('net');

var app = express();

//socket 전송
/*const http = require('http');
const httpServer = http.Server(app);
const io = require('socket.io')(httpServer);
const SocketIOFile = require('socket.io-file');
*/


/*
const net = require('net');
var socket = new net.Socket();*/

/*
app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});
*/
app.use(helmet()); // 밑에꺼랑 충돌 안날려나
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
  next();
});

app.set('port', 9988);
app.listen(app.get('port'), () => console.log("Conneted " + app.get('port') + " port"));
app.use(bodyParser.json());


// open the database
let db = new sqlite3.Database('./db/sleepless.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error('database' + err.message);
  }
});



//회원가입 
app.post('/sign-up', (req, res) => {
  let res_id = req.body.id;
  let res_password = req.body.pwd;
  let res_name = req.body.name;
  let res_email = req.body.email;

  let q = `select * from user where id = ?`;
  db.all(q, [res_id], (err, rows) => {
    if(err) throw (err);
    if (rows.length == 0) {
      let q = `insert into user values (? , ?, ?, ?)`;
      db.run(q, [res_id, res_password, res_name, res_email], (err) => {
        if (err) {
          console.log('select sign-in err' + err.toString());
        } else {
          res.json({ result: 'success' });
        }
      })
    } 
    else {
      console.log('this is inserted data ');
      res.json({ result: 'fail', msg: 'id is already exist' });

    }
  })
})


//로그인
app.post('/login', (req, res) => {
  let res_id = req.body.id;
  let res_password = req.body.pwd;
  
  let q = `select id from user where id = ? and password = ?`;
  db.all(q, [res_id, res_password], (err, rows) => {
    if(err) throw (err);
    if (rows.length) {
          res.json({ result: 'success' });
    } 
    else {
        res.json({result: 'fail'});
    }
  })
})


//회원 정보 가져오기
app.post('/user',(req,res) => {
  let res_id = req.body.id;
  let res_password = req.body.pwd;
  let user_name = "";
  let user_email = "";

  let q = `select id from user where id = ? and password = ?`;
  let p = `select name, email from user where id = ?`;
  

  db.all(q, [res_id, res_password], (err, rows) => {
    if(err) throw (err);
    //성공인 경우      
    if (rows.length) {
      db.get(p, [res_id], (err, rows) => {
        user_name = rows.name;
        user_email = rows.email;
        res.json({ result: 'success', name: user_name, email: user_email });
      })          
    } 
    else {
        res.json({result: 'fail'});
    }
  })
})


// 검사할 url 보내기 //이거 가지고 있어야 하는건가?
app.post('/res_url', (req, res)=> {
  let user_id = req.body.id;
  let user_url = req.body.url;
  let vis = req.body.vis;
  let date = Date.now();
  
  if(user_id != ""){
    let p = `select id from user_url where id = ? and url = ?`
    db.all(p,[user_id, user_url], (err, rows) => {
      if(rows.length){ 
        res.json({ result: 'success' }); 
      }
      else{
        let q =  `insert into user_history values(?,?,?,?,?,?)`;
        db.run(q, [user_id,user_url, user_url,date, 'null', 0], (err) => {
         if (err) {
          console.log('url isnert' + err.toString());
         }else {     
            res.json({ result: 'success' });

            //virus total
            
         }
        })
      }
    })
  }
  else{ res.json({ result: 'success' });} // id없는 유저 처리

  //쿠쿠로 정보 보내주기
})

//url virus total 검사 여부까지 함께 확인하기
app.post('/url_virus', (req, res)=> {
  let user_id = req.body.id;
  let user_url = req.body.url;
  let vis = req.body.vis;
  let date = Date.now();
  
  if(user_id != ""){
        let q =  `insert into user_history values(?,?,?,?,?,?)`;
        db.run(q, [user_id,user_url, user_url,date, 'null', 0], (err) => {
         if (err) {
          console.log('url isnert' + err.toString());
         }else {     
            //virus total
            if(vis=="1"){
            let m = `select * from file_result_virustotal where md5_url = ?`;
            db.all(m, [user_url], (err, rows) => {
              if(err) throw (err);
              if (rows.length == 0) { // 해당 결과가 없는 경우
                virustotal.setKey('bb00a382429ac13873fa7928c797cdb505c06f0d3d4e73d6eb6a18437fb6453e');
                virustotal.setDelay(15000);
                console.log("virustotal 검사중"); 
          
                virustotal.UrlEvaluation(user_url,function(data){
                  // res.json({company: data.scans, total: data.total, positives: data.positives});
                   let p = `insert into file_result_virustotal values (? , ?, ?, ?)`;
                    console.log(data);
                   console.log(JSON.stringify({company:data.scans}));
                   db.run(p, [user_url,JSON.stringify({company:data.scans}) , data.total, data.positives], (err) => {
                   if (err) {
                      console.log('select sign-in err' + err.toString());
                    } else {
                      res.json({ result: 'success' });
                    }
                  })
                }, function(mistake){
                  console.log(mistake);
                  res.json({result:'fail'});
                });
              } 
              else {
                console.log('this is inserted data ');
                //console.log(JSON.parse(rows[0].company));
                res.json({ result: 'success' }); //해당 결과 이미 있음
              }
            })
          }
         }
        })
  }
  else{ res.json({ result: 'success' });} // id없는 유저 처리


  //쿠쿠로 정보 보내주기
})


//검사 이력 가져오기
app.post('/history', (req,res)=>{
  let user_id = req.body.id;
 //db에서 전체 결과 가져오기 //성공 여부 출력하기 
 console.log(user_id);
 let q = `select file_url_name, date, total, positives from user_history, file_result_virustotal where id = ? and md5_url = file_md5_url ORDER BY date DESC` 
  db.all(q, [user_id], (err, rows) => {
    if(err){
      console.log(err);
    } else{
      res.json({ result: 'success', data : rows })
    }
  });
})



//file이름 중복 여부 확인
app.post('/file_isin',(req, res)=>{
  let res_id = req.body.id;
  let res_file_name = req.body.file_name;

  let q = `select * from user_history where id = ? and file_url_name = ?`;
  db.all(q, [res_id, res_file_name], (err, rows) => {
    if(err) throw (err);
    if (rows.length == 0) {
          res.json({ result: 'success' });
    } 
    else {
      res.json({ result: 'fail', msg: 'file_name is already exist' });
    }
  })
})




//multer 이용한 file 포멧
const upload = multer({
  limits: { fileSize: 5 * 1024 * 1024 },
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'files/'); // 폴더에 파일을 저장한다.
    },
    filename(req, file, cb) {
      cb(null,  req.query.id + '_'+ Date.now() +'_'+ file.originalname); // 전송된 파일 자신의 이름으로 파일을 저장한다.
    }
  })
});


function file_write(socket,data){
  var success = !socket.write(data);
  if(!success){
    (function(socket, data){
      socket.once('drain', function(){
          writeData(socket, data);
      });
    })(socket, data)
  }
}
//file 전송



app.post('/file', upload.single('avatar'), (req, res) => {
  console.log('UPLOAD SUCCESS!', req.file);

  var path = `./files/${req.file.filename}`
  var req_id = req.query.id;
  var req_file_name = req.file.originalname;
  var req_date = Date.now();
  var real_name = req.file.filename;

  console.log(req_id);
  /*md5File(path, (err,hash)=>{
    if(err) throw err;
    req_md5 = hash;
    console.log(`the md5 sum of is : ${hash}`)
  })*/ // 비동기 방식이라 안씀

  //md5
  var md5 = md5File.sync(path);

  //db 저장
  let q = `insert into user_history values (? , ?, ?, ?, ?, ?)`;
  db.run(q, [req_id, req_file_name, md5, req_date, path, '1'], (err) => {
    if (err) {
      console.log('select sign-in err' + err.toString());
    } else {
      res.json({ result: 'success' });
    }
  })
  


  //socket 전송

 /* var socket = io.connect('http://example.com/user');
  var stream = ss.createStream();
  var filename = path;
  
  ss(socket).emit('profile-image', stream, {name: filename});
  fs.createReadStream(filename).pipe(stream);

*/

  /*net.connect({port:8107, host:'14.49.36.132'}, function(){
    console.log('connect');
        //time out이나 느낀점 this.setTimeout(500);
        //this.setEncoding('utf8'); // 인코딩
  });
  
  file_write(socket, data);
*/

  /*socket.connect(3000,'14.49.36.132',function(){
    console.log("connect");
    
    socket.emit, ('start', req.file);
  })*/


/*
  socket.on("data", function(data){
    data = JSON.parse(data);
    console.log('response from server : %s', data.response);

    socket.write(JSON.stringify({ response: "Hey there server!" }));
    socket.end();
  });*/
  //var socket = io('http://14.49.36.132:3000');
  //var uploader = new SocketIOFile(socket);
  // var form = document.getElementById('form');
/*
  uploader.on('start', (fileInfo)=>{
    console.log('uploading ', fileInfo );
  });
  uploader.on('stream', (fileInfo)=>{
    console.log('stream ', fileInfo );
  });
  uploader.on('complete', (fileInfo)=>{
    console.log('complete', fileInfo);
  });
  uploader.on('error', (fileInfo)=>{
    console.log('error ', fileInfo );
  });
  uploader.on('abort', (fileInfo)=>{
    console.log('error ', fileInfo );
  });
  
  var uploadIds = uploader.upload(req.file, {
    data: {}
  });


*/

});

//바이러스 토탈 사용하는 거
app.post('/file/virustotal', upload.single('avatar'), (req, res) => {
  var path = `./files/${req.file.filename}`
  var req_id = req.query.id;
  var req_file_name = req.file.originalname;
  var req_date = Date.now();
  var real_name = req.file.filename;
  
  //md5
  var md5 = md5File.sync(path);


  
  //db 저장 //virus total 검사 여부도 저장해야 할것 같음 // 하나로 합쳐놓자 이부분 수정하기
  let q = `insert into user_history values (? , ?, ?, ?, ?, ?)`;
  db.run(q, [req_id, req_file_name, md5, req_date, path, 1], (err) => {
    if (err) {
      console.log('select sign-in err' + err.toString());
    } else {
      //성공
    }
  })
  
  // db검사 여부 확인 // 해당 md5가 검사되었으면 그결과 보내주기
  let m = `select * from file_result_virustotal where md5_url = ?`;
  db.all(m, [md5], (err, rows) => {
    if(err) throw (err);
    if (rows.length == 0) { // 해당 결과가 없는 경우
      virustotal.setKey('bb00a382429ac13873fa7928c797cdb505c06f0d3d4e73d6eb6a18437fb6453e');
      virustotal.setDelay(15000);
      console.log("virustotal 검사중"); 

      virustotal.FileEvaluation(real_name,path,fs.readFileSync(path),function(data){
        // res.json({company: data.scans, total: data.total, positives: data.positives});
         let p = `insert into file_result_virustotal values (? , ?, ?, ?)`;
         // console.log(data);
         console.log(JSON.stringify({company:data.scans}));
         db.run(p, [md5,JSON.stringify({company:data.scans}) , data.total, data.positives], (err) => {
         if (err) {
            console.log('select sign-in err' + err.toString());
          } else {
            res.json({ result: 'success' });
          }
        })
      }, function(mistake){
        console.log(mistake);
        res.json({result:'fail'});
      });
    } 
    else {
      console.log('this is inserted data ');
      console.log(JSON.parse(rows[0].company));
      res.json({ result: 'success' }); //해당 결과 이미 있음
    }
  })
});


/*
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
*/