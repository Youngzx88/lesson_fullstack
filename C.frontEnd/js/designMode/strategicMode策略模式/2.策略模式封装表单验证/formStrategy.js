// 策略对象 - 验证年龄是否合法
const ageValidator = {
  validate(value) {
    const age = parseInt(value);
    if (isNaN(age) || age < 0 || age > 120) {
      return {
        errmsg: `${value} is not a valid age`,
      };
    }
  },
};

// 策略对象 - 验证是否为非空字符串
const stringValidator = {
  validate(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      return {
        errmsg: `${value} should be non-empty string`,
      };
    }
  },
};

// 策略对象 - 验证是否为数组
const arrayValidator = {
  validate(value) {
    if (!Array.isArray(value)) {
      return {
        errmsg: `${value} should be array`,
      };
    }
  },
};

// 表单验证类
class FormValidator {
  constructor(formData) {
    this.formData = formData;
    this.strategies = {};
    this.errors = {};
    this.initStrategies();
  }

  // 初始化策略对象
  initStrategies() {
    this.strategies.age = ageValidator;
    this.strategies.realName = stringValidator;
    this.strategies.userName = stringValidator;
    this.strategies.password = stringValidator;
    this.strategies.gender = stringValidator;
    this.strategies.occupation = stringValidator;
    this.strategies.hobbies = arrayValidator;
    this.strategies.intro = stringValidator;
  }

  // 表单数据验证方法
  validate() {
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key)) {
        const value = this.formData[key];
        const validator = this.strategies[key];
        if (validator) {
          const result = validator.validate(value);
          if (result) {
            this.errors[key] = result;
          }
        }
      }
    }
    return this.errors;
  }

  // 清除错误信息方法
  clearErrors() {
    this.errors = {};
  }
}

// 使用示例
const formData = {
  realName: '',
  age: 0,
  userName: '',
  password: '',
  gender: 'male',
  occupation: '',
  hobbies: [],
  intro: '',
};

const validator = new FormValidator(formData);

formData.age = 120;
formData.realName = 'Jack';
formData.hobbies = ['reading', 'swimming'];

const errors = validator.validate();
if (Object.keys(errors).length > 0) {
  console.log('表单验证不通过：', errors);
} else {
  console.log('表单验证通过！');
}
