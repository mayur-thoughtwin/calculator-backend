const addition = (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({
            msg: "all fields are required"
        });
    }
    const result = num1 + num2;
    res.status(200).json({ result });
};

const substraction = (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({
            msg: "all fields are required"
        });
    }
    const result = num1 - num2;
    res.status(200).json({ result });
};
const multiply = (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({
            msg: "all fields are required"
        });
    }
    const result = num1 * num2;
    res.status(200).json({ result });
};


// using eval 
const alloperations = (req, res) => {
    const { value } = req.body;
    try {
        const result = eval(value);
        res.status(200).json({ result });
    } catch (err) {
        res.status(400).json({ msg: "invalid value" });
    }
}

// // using loop
// const calulate = (req, res) => {
//     const { value } = req.body;
//     try {
//         const arr1 = Array.from(value);
//         let result = 0;
//         let tempArr = [];
//         for (let i = 0; i < arr1.length; i++) {
//             if (arr1[i] === '*' || arr1[i] === '/') {
//                 const num1 = parseInt(arr1[i - 1]); 
//                 const num2 = parseInt(arr1[i + 1]); 
//                 let newValue;
                
//                 if (arr1[i] === '*') {
//                     newValue = num1 * num2;
//                 } else if (arr1[i] === '/') {
//                     newValue = num1 / num2;
//                 }
//                 tempArr.push(newValue);  
//             } 
//         }
        
//     } catch (error) {
//         res.status(500).json({ msg: "internal server error" })
//     }
// }


module.exports = { addition, substraction, multiply, alloperations };
