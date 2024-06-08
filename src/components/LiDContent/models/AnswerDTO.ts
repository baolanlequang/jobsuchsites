export class AnswerDTO {
  no: number;
  de: string;
  vi: string;

  constructor(no: number = -1, de: string = "", vi: string = "") {
    this.no = no;
    this.de = de;
    this.vi = vi;
  }
};