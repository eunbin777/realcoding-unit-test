import Calculator from "../js/calculator/Calculator";

describe("음수 양수 판단", () => {
    const cal = new Calculator();

    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
        expect(cal.isNegative(7)).toBeFalsy();
    });
    test("isNegative에 -5을 넣으면 true를 반환한다.", () => {
        expect(cal.isNegative(-5)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        expect(cal.isNegative(0)).not.toBeTruthy();
    });
});

describe("Data 클래스 판단하기", () => {
    test("getDate를 하면 Date 객체가 나온다.", () => {
        const cal = new Calculator();
        expect(cal.getDate()).toBeInstanceOf(Date);
    })
});

beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한번만 실행된다.");
});

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});

describe("가상 함수 테스트해보기", () => {
    test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
      const cal = new Calculator();
      const mock = jest.fn();
      cal.customCalculation(mock, ["a", "b", "c"]);
      expect(mock).toHaveBeenCalled();
    });
    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
      const cal = new Calculator();
      const mock = jest.fn();
      cal.customCalculation(mock, [1, 2, 3]);
      expect(mock).toHaveBeenCalledWith([1, 2, 3]);
    });
    test("abs함수는 Math.abs를 호출한다.", () => {
      const cal = new Calculator();
      const mock = jest.spyOn(Math, "abs");
      cal.abs(-7);
      expect(mock).toHaveBeenCalled();
    });
});