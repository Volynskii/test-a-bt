import data from "../mocks/data";

function Functions() {
    const task11Result = (animals) => {
        const handleFindTypeLength = (type) => {
            let result = animals.filter(it => it.type === type).length;
            return result;
        };
        let dogsLength = handleFindTypeLength('dog');
        let catsLength = handleFindTypeLength('cat');
        let allAges = animals.map(it => it.age);
        const agesSum = animals.map(it => it.age).reduce(
            (previousValue, currentValue) => previousValue + currentValue, 0);
        let avgAge = Math.round(agesSum / allAges.length);
        const result = {dogs:dogsLength,cats:catsLength,avgage:avgAge};
        return result;
    };

    console.log(task11Result(data));

    const task12Result = (animals) => {
        const breedsAnimals = animals.filter(it => it.breed === true);
        const blackBreeds = breedsAnimals.filter(it => it.features.includes('black'));
        const result = blackBreeds;
        return result;
    };

    console.log(task12Result(data));

    const task13Result = (animals) => {
        let result = [];
        const findAnimal = (type, color) => {
            const result = animals.filter(it => it.type === type)
                .filter(it => it.features.includes(color));
            return result;
        };

        const blackCats = findAnimal('cat', 'black');
        const whiteDogs = findAnimal('dog', 'white');
        result = [...blackCats, ...whiteDogs];
        return result;
    };

    console.log(task13Result(data));

    const task14Result = (animals) => {
        let result = [];

        const handleFindType = (type) => {
            let result = animals.filter(it => it.type === type);
            return result;
        };
        let dogs = handleFindType('dog');
        let cats = handleFindType('cat');
        const catsFromHighToLow = cats.slice().sort((a, b) => a.age - b.age)
        const dogsFromLowToHigh = dogs.slice().sort((a, b) => b.age - a.age)
        result = [...catsFromHighToLow,...dogsFromLowToHigh];
        return result;
    };

    console.log(task14Result(data));

    const myPowFunc = (number,n) => {
        let result = number;
        if(number > 0 && n === 0){
            return 1;
        }
        let x = result;
        while(n > 1){
            x = result * x;
            n--;
        }
        result = x;
        return result;
    };

    console.log(myPowFunc(3, 4));


    const myFlatFunc = (inputArray) => {
        var queue = inputArray.slice();
        var result = [];
        while(queue.length) {
            let curr = queue.pop();
            if(Array.isArray(curr)) {
                queue.push(...curr);
            }
            else result.push(curr);
        }
        return result.reverse();
    };

    console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59


    return (
        <div>functions</div>
    );
}

export default Functions;
