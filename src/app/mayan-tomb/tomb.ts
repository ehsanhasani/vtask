export class Tomb {
    // position in chart
    private x: number;
    private y: number;
    // position in array
    private i: number;
    private j: number;
    // wheader has statue status
    private statue: boolean;
    private bobPosition: boolean;
    constructor() {
        this.statue = false;
        this.bobPosition = false;
    }
    // setter of x
    public setX(x: number) {
        this.x = x;
    }
    // setter of y
    public setY(y: number) {
        this.y = y;
    }
    // getter of x
    public getX() {
        return this.x;
    }
    // getter of y
    public getY() {
        return this.y;
    }
    // setter of x
    public setI(i: number) {
        this.i = i;
    }
    // setter of y
    public setJ(j: number) {
        this.j = j;
    }
    // getter of x
    public getI() {
        return this.i;
    }
    // getter of y
    public getJ() {
        return this.j;
    }
    // setter of statue
    public setStatue() {
        this.statue = !this.statue;
    }
    // check wheather statue exist in this position
    public hasStatue() {
        return this.statue;
    }
    // setter of statue
    public setbBobPosition() {
        this.bobPosition = true;
    }
    // check wheather statue exist in this position
    public hasBobPosition() {
        return this.bobPosition;
    }
}
