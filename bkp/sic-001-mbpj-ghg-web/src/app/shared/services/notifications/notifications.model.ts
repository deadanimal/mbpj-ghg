export class Notification {
  public id: string;
  public title: string;
  public message: string;
  public to_user: string;
  public date_send: any;

  constructor(
    id: string,
    title: string,
    message: string,
    to_user: string,
    date_send: any
  ) {
    this.id = id;
    this.title = title;
    this.message = message;
    this.to_user = to_user;
    this.date_send = date_send;
  }
}
