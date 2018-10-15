export class Posting {
  public pContent: string;
  public pPassword: string;
  public pDate: string;
  public postingID: number;
  public title: string;
  public pWriter: string;

  constructor(pContent, pPassword, pDate, postingID, title, pWriter) {
    this.pContent = pContent;
    this.pPassword = pPassword;
    this.pDate = pDate;
    this.postingID = postingID;
    this.title = title;
    this.pWriter = pWriter;
  }
}
