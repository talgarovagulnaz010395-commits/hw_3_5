// Разбор объекта:  Дан объект с информацией о пользователе:
    const user = {
        id: 101,
        name: "user",
        age: 28,
        job: "Frontend Developer",
        skills: {
            programming: ["JavaScript", "TypeScript", "React"],
            softSkills: ["communication", "teamwork"],
        },
        contacts: {
            email: "user@example.com",
            phone: "+996555123456",
        },
    };
    console.log(user);

    const {name,age, job} = user;
    console.log(name,age,job);

    const { skills: { programming: [firstSkill] } } = user;
    console.log(firstSkill);

    const { skills :{
        softSkills: [...allSoftSkills]
        } } = user;
    console.log(allSoftSkills);

    const address = user.address?.city ?? "Адрес не указан" ;
    console.log(address);

// 2: Дан массив пользователей, но не у всех есть address
    const users = [
    { name: "user1", age: 29, address: { city: "Bishkek" } },
        { name: "user2", age: 23 },
        { name: "user3", age: 35, address: { city: "Madrid" } },
    ];

    const updatedUsers = users.map(user => ({ ...user ,
    city : user.address?.city ?? "Адрес не указан"
    }));
    console.log(updatedUsers);


// 3: Создайте функцию calculateSum, которая принимает первый аргумент multiplier, а остальные числа собирает с помощью rest и возвращает их сумму, умноженную на multiplier
 const calculateSum = (multiplier,...numbers) => {
     const sum = numbers.reduce((prev, num) => prev + num, 0);
     return console.log(sum * multiplier);
 }
calculateSum(2,3,5,6,8)