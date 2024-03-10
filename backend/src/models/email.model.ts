class EmailModel {
    id: string;
    remetente: string;
    destinatario: string;
    assunto: string;
    corpoEmail: string;
    comprovante?: string;
    isSpam: boolean;
    isDelivered: boolean;

    constructor(data: { 
      id: string; 
      remetente: string; 
      destinatario: string; 
      assunto: string;
      corpoEmail: string;
      comprovante?: string
      isSpam: boolean;
      isDelivered: boolean;
    }) {
        this.id = data.id;
        this.remetente = data.remetente;
        this.destinatario = data.destinatario;
        this.assunto = data.assunto;
        this.corpoEmail = data.corpoEmail;
        this.comprovante = data.comprovante;
        this.isSpam = data.isSpam;
        this.isDelivered = data.isDelivered;
    }

    preencherEmail(field: string, value: string) {
      switch (field) {
          case 'remetente':
              this.remetente = value;
              break;
          case 'destinatario':
              this.destinatario = value;
              break;
          case 'assunto':
              this.assunto = value;
              break;
          case 'corpoEmail':
              this.corpoEmail = value;
              break;
          case 'comprovante':
              this.comprovante = value;
              break;
          case 'isSpam':
              this.isSpam = value === 'false' ? true : false;
              break;
          case 'isDelivered':
              this.isDelivered = value === 'true' ? true : false;
              break;
      }
  }
}

export default EmailModel;
