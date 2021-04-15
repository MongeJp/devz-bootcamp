const pascalTriangle = (rowIndex: number): Array<number> => {
    let triangle = [[1], [1, 1]];
    for (let index = 1; index < rowIndex; index++) {
        triangle.push(createRow(triangle[triangle.length - 1]));
    }
    return triangle[rowIndex];
};

const createRow = (lastRow: Array<number>): Array<number> => {
    let row = [];
    for (let index = 1; lastRow.length > index; index++) {
        let element = lastRow[index] + lastRow[index - 1];
        row.push(element);
    }
    return [1, ...row, 1];
};

pascalTriangle(1);
