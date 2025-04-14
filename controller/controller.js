const addition = (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({
            msg:"all fields are required"
        });
    }
    const result = num1 + num2;
    res.status(200).json({ result });
};

const substraction = (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({
            msg:"all fields are required"
        });
    }
    const result = num1 - num2;
    res.status(200).json({ result });
};
const multiply = (req, res) => {
    const { num1, num2 } = req.body;
    if (!num1 || !num2) {
        return res.status(400).json({
            msg:"all fields are required"
        });
    }
    const result = num1 * num2;
    res.status(200).json({ result });
};


// using eval 
const alloperations=(req, res) => {
    const { value } = req.body;
    try {
      const result = eval(value);
      res.status(200).json({ result });
    } catch (err) {
      res.status(400).json({ msg:"invalid value" });
    }
  }


module.exports = { addition,substraction,multiply,alloperations};
