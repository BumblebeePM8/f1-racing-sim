class Car {
    speed: number;
    position: number;
    maxSpeed: number;
    acceleration: number;
    braking: number;

    constructor(maxSpeed: number, acceleration: number, braking: number) {
        this.speed = 0;
        this.position = 0;
        this.maxSpeed = maxSpeed;
        this.acceleration = acceleration;
        this.braking = braking;
    }

    accelerate() {
        this.speed += this.acceleration;
        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
    }

    brake() {
        this.speed -= this.braking;
        if (this.speed < 0) {
            this.speed = 0;
        }
    }

    updatePosition() {
        this.position += this.speed;
    }

    customize(newMaxSpeed: number, newAcceleration: number, newBraking: number) {
        this.maxSpeed = newMaxSpeed;
        this.acceleration = newAcceleration;
        this.braking = newBraking;
    }
}

export default Car;