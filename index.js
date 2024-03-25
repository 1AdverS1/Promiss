class Developer {
    constructor(name) {
        this.name = name;
    }

    startwork() {
        return `${this.name} start work...`;
    }

    endwork() {
        return `${this.name} end work...`;
    }
}

class Frontend extends Developer {
    constructor(name, websiteName) {
        super(name);
        this.websiteName = websiteName;
    }

    buildwebsite() {
        return `${this.name} start build website`;
    }
}

class Backend extends Developer {
    constructor(name) {
        super(name);
    }
    buildserver() {
        return `${this.name} start build server`;
    }
}

const developer = new Developer("John");

console.log(developer.startwork()); 
console.log(developer.endwork());   
const frontendDeveloper = new Frontend("John", "Instagram");

console.log(frontendDeveloper.startwork());   
console.log(frontendDeveloper.endwork());     
console.log(frontendDeveloper.buildwebsite()); 

const backendDeveloper = new Backend("ne John");

console.log(backendDeveloper.startwork());   
console.log(backendDeveloper.endwork());     
console.log(backendDeveloper.buildserver()); 

///////////////////////////////////////////

class User {
    constructor(firstName, lastName) {
        this.id = Date.now();
        this.isAdmin = false;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    logFullName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

const user = new User('Alexey', 'Gromov');
user.logFullName(); 


///////////////////////////

class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.area = width * height;
    }

    draw() {
        const container = document.createElement('div');
        container.style.width = this.width + 'px';
        container.style.height = this.height + 'px';
        container.style.backgroundColor = this.color;
        container.style.position = 'relative';

        const areaText = document.createElement('span');
        areaText.textContent = 'Area: ' + this.area;
        areaText.style.position = 'absolute';


        container.appendChild(areaText);
        document.body.appendChild(container);
    }
}


const rectangle1 = new Rectangle(100, 50, 'blue');
rectangle1.draw();

const rectangle2 = new Rectangle(150, 75, 'green');
rectangle2.draw();

const rectangle3 = new Rectangle(200, 100, 'red');
rectangle3.draw();


////////////////////////////////////

function generateRandomString() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const string = "foo";
            resolve(string);
        }, 2000);
    });
}


generateRandomString().then(string => {
    console.log(string); 
}).catch(error => {
    console.error(error);
});



