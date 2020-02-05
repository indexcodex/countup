class IXCX_CountUp {
    constructor(objectData = { target: null, end: null, loopAmount: null, loopDelay: null, }) {
        this.target = objectData.target;
        this.end = objectData.end;
        this.loopAmount = objectData.loopAmount;
        this.loopDelay = objectData.loopDelay;
    }

    start() {
        const chunk = (this.end ? this.end : 100) / this.loopAmount;
        let startAtZero = 0;
        let counter = 0;

        if (!this.target) {
            console.log('No target element!');
        } else {
            setInterval(() => {
                if (counter < this.loopAmount) {
                    counter++;
                    this.target.innerHTML = Math.ceil(startAtZero += chunk).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                }
            }, this.loopDelay ? this.loopDelay : 50);
        }
    }
}