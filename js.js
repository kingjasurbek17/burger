class Burger {
    constructor(param) {
        let{header__timer,receipt,receipt__window,receipt__windowOut,receipt__windowBtn,view__close,view,viewImgg} = param
        this.vaqt = document.querySelector(header__timer)
        this.burger = document.querySelectorAll(param.burger);
        this.btn = document.querySelectorAll(`${param.burger} .main__product-btn`)
        this.mainProdactTitle = document.querySelectorAll(`${param.burger} .main__product-title`)
        this.mainProductImg = document.querySelectorAll(`${param.burger}.main__product-img`)
        this.addCart = document.querySelector(`${param.burger} .addCart`);
        this.mainView = document.querySelector(view)
        this.mainViewImg = document.querySelector(viewImgg)
        this.mainViewClose = document.querySelector(view__close)
        this.receipt = document.querySelector(receipt)
        this.receiptWindow = document.querySelector(receipt__window)
        this.receiptwindowOut = document.querySelector(receipt__windowOut)
        this.pay = document.querySelector(receipt__windowBtn)


        this.product = {
            plainBurger: {
                name: 'GAMBURGER',
                price: 10000,
                kcall: 400,
                amount: 0,
                get Sum() {
                    return this.price * this.amount;
                },
                get Kcall() {
                    return this.kcall * this.amount;
                }
            },
            freshBurger: {
                name: 'GAMBURGER FRESH',
                price: 20500,
                kcall: 500,
                amount: 0,
                get Sum() {
                    return this.price * this.amount;
                },
                get Kcall() {
                    return this.kcall * this.amount;
                }
            },
            freshCombo: {
                name: 'FRESH COMBO',
                price: 31900,
                kcall: 600,
                amount: 0,
                get Sum() {
                    return this.price * this.amount;
                },
                get Kcall() {
                    return this.kcall * this.amount;
                }
            },
        }
        this.addCart.addEventListener('click', () => {this.calculate()})

        this.pay.addEventListener('click', () => { location.reload()})
        for (let i = 0; i < this.mainProdactTitle.length; i++) {
            this.mainProdactTitle[i].addEventListener('dblclick', () => { this.viewImg()})
        }
        this.mainViewClose.addEventListener('click', () => {this.mainView.classList.remove('active')})


        for (let i = 0; i < this.btn.length; i++) {
            this.btn[i].addEventListener('click', () => { this.prepare(this.btn[i])})
        }
        this.time();
    }
    viewImg() {
        this.mainView.classList.add('active')
        let srcImg = this.mainProductImg[i].getAttribute('src')
        this.mainViewImg.removeAttribute('src')
        this.mainViewImg.setAttribute('src', srcImg)
    }
    calculate() {
        this.receipt.style.display = 'flex'
        setTimeout(() => {
            this.receipt.style.opacity = '1'
            this.receiptWindow.style.top = '10%'
        }, 100);

        let menu = 'Your cart:\n\n'
        let TotalPrice = 0
        let TotalKcall = 0
        for (const key in this.product) {
            if (this.product[key].amount) {
                menu = menu + `${this.product[key].name} ${this.product[key].amount}x\n`
                TotalPrice = TotalPrice + this.product[key].Sum
                TotalKcall = TotalKcall + this.product[key].Kcall
            }
        }
        this.receiptwindowOut.innerHTML = `${menu}\nTotal price ${TotalPrice}sum\nTotal kcall ${TotalKcall}kcall`
    }
    prepare(element) {
        let parent = element.closest('.main__product')
        let parentId = parent.getAttribute('id')
        let num = parent.querySelector('.main__product-num')
        let price = parent.querySelector('.main__product-price span')
        let kcall = parent.querySelector('.main__product-kcall span')
        let sym = element.getAttribute('data-symbol')
        let miqdor = this.product[parentId].amount
        
        if (sym == '+' && miqdor < 10) {
            miqdor++
        } else if (sym == '-' && miqdor > 0) {
            miqdor--
        }
        num.innerHTML = miqdor;
        this.product[parentId].amount = miqdor
        price.innerHTML = this.product[parentId].Sum
        kcall.innerHTML = this.product[parentId].Kcall
    }

    time() {
        if (this.vaqt.innerHTML < 50) {
            this.vaqt.innerHTML++
            setTimeout(() => {
                this.time()
            }, 100);
        } else if (this.vaqt.innerHTML < 70) {
            this.vaqt.innerHTML++
            setTimeout(() => {
                this.time()
            }, 200);
        } else if (this.vaqt.innerHTML < 100) {
            this.vaqt.innerHTML++
            setTimeout(() => {
                this.time()
            }, 300);
        }
    }
}

const burger = new Burger({
    burger: '.burger1',
    header__timer: '.header__timer-extra',
    receipt:'.receipt',
    receipt__window:'.receipt__window',
    receipt__windowOut:'.receipt__window-out',
    receipt__windowBtn:'.receipt__window-btn',
    view__close:'.view__close',
    view:'.view',
    viewImgg:'.view img'
})

