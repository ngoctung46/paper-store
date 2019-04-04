export class MenuItem {
    id: string;
    name: string;
    url: string;
    thumbnailUrl: string;
    position: number;
    subMenuItems: MenuItem[];

    constructor(obj?: any) {
        this.id             = obj && obj.id             || null;
        this.name           = obj && obj.name           || null;
        this.url            = obj && obj.url            || null;
        this.thumbnailUrl   = obj && obj.thumbnailUrl   || null;
        this.position       = obj && obj.position       || null;
        this.subMenuItems   = obj && obj.subMenuItems   || null;
    }
}
