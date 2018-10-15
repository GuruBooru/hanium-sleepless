export class Commit {
  public postingID: number;
  public cWriter: string;
  public cPassword: string;
  public cDate: string;
  public cContent: string;

  constructor(postingID, cWriter, cPassword, cDate, cContent) {
    this.postingID = postingID;
    this.cWriter = cWriter;
    this.cPassword = cPassword;
    this.cDate = cDate;
    this.cContent = cContent;
  }
}
