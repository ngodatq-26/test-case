const { insertPhone } = require('../src/index');

it ('số  ký tự từ 0 -> 10', () => {
    expect(insertPhone('10')).toBeTruthy();
});

it ('khong có ký tự < 0', () => {
    expect(insertPhone('-10')).toBeFalsy();
});

it ('số ký tự khong > 10', () => {
    expect(insertPhone('12349394434431')).toBeFalsy();
})

it('ký tự không được để trống', () => {
    expect(insertPhone('')).toBeFalsy();
})

it('ký tự không phải dạng số' , () => {
    expect(insertPhone('dsdado23')).toBeFalsy();
} )