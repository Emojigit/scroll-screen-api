/**
 * Scroll Screen API controlled by A and B buttons
 */

namespace scroll {
    export class Scroller {
        TOC: Array<Array<any>>;
        ID: int16;
        constructor(TOC: Array <Array<any>>) {
            this.TOC = TOC
            this.ID = randint(0, 100)
            console.log("init scroll element length " + this.TOC.length.toString())
        }
        CurrentPage: number = 0;
        start(AutoStop: boolean = false) {
            console.log("Start scroll element")
            while (true) {
                this.TOC[this.CurrentPage][0]()
                console.log("Current page of " + this.ID.toString() + ": " + this.CurrentPage.toString())
                while (true) {
                    if (input.buttonIsPressed(Button.AB)) {
                        console.log("Scroll " + this.ID.toString() + ": AB")
                        this.TOC[this.CurrentPage][1]()
                        if (AutoStop) {
                            return true;
                        }
                        break;
                    } else if (input.buttonIsPressed(Button.A)) {
                        console.log("Scroll " + this.ID.toString() + ": A")
                        basic.pause(20)
                        if (!input.buttonIsPressed(Button.B)) {
                            this.CurrentPage -= 1
                            if (this.CurrentPage == -1) {
                                this.CurrentPage = this.TOC.length - 1
                            }
                            break;
                            basic.pause(500)
                        }
                    } else if (input.buttonIsPressed(Button.B)) {
                        console.log("Scroll " + this.ID.toString() + ": B")
                        basic.pause(20)
                        if (!input.buttonIsPressed(Button.A)) {
                            this.CurrentPage += 1
                            if (this.CurrentPage == this.TOC.length) {
                                this.CurrentPage = 0
                            }
                            break;
                            basic.pause(500)
                        }
                    }
                }
            }
        }
    }
}
