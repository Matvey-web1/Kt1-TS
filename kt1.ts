class Visa {
    readonly _country: string;
    readonly _isValid: boolean;
    readonly _year: number;

    constructor(){
        this._country = this.getRandomCountry()
        this._isValid = this.getIsValid()
        this._year = this.getRandomYear()
    }
    private getRandomCountry(): string {
            const randomNumber: number = Math.floor(Math.random() * 3) + 1;
            if (randomNumber === 1) {
                return "Арстоцка"
            } else if (randomNumber === 2) {
                return "Колечия"
            } else {
                return "Орбистан"
            }
        }
    
    private getIsValid(): boolean {
        const randomNumber: number = Math.floor(Math.random() * 2) + 1;
        return randomNumber === 2 ? false : true
    }

    private getRandomYear(): number {
        return Math.floor(Math.random() * (2050 - 2000 + 1)) + 2000
    }

    public showInfo(): void {
        console.log(`Страна проживания - ${this._country}
Валидная? - ${this._isValid}
Год выдачи - ${this._year}`)
    }
}


class BorderGuard {
    public checkVisa(visa: Visa): string {
        if (visa._country === "Колечия") {
            return "Враждебная страна!"
        }
        if (visa._isValid === false) {
            return "Подделка!"
        }
        if (visa._year > 2026 || visa._year < 2022) {
            return "Некорректный год выпуска!"
        }
        return "Въезд разрешен!"
    }

}

function main (): void {
    const visa1 = new Visa()
    const visa2 = new Visa()
    const visa3 = new Visa()

    const guard = new BorderGuard()

    visa1.showInfo()
    console.log(guard.checkVisa(visa1))

    visa2.showInfo()
    console.log(guard.checkVisa(visa2))

    visa3.showInfo()
    console.log(guard.checkVisa(visa3))
}

main()