export class Contact {
    id: string;
    name: string;
    email: string;
    subject: string;
    message: string;

    constructor(obj?: any) {
        this.id             = obj && obj.id             || null;
        this.name           = obj && obj.name           || null;
        this.subject        = obj && obj.subject        || null;
        this.email          = obj && obj.email          || null;
        this.message        = obj && obj.message        || null;
    }
}

