function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0]; 
}

getFirstElement<number>([1, 2, 3]); // 1; => function getFirstElement<number>(arr: number[]): number
getFirstElement<string>(["a", "b", "c"]); // "a"  => function getFirstElement<string>(arr: string[]): string
getFirstElement<boolean>([true, false, true]); // true => function getFirstElement<boolean>(arr: boolean[]): boolean

getFirstElement<number>([1, "a", true]); // error: Type 'string' is not assignable to type 'number'.ts(2322) // Type 'boolean' is not assignable to type 'number'.ts(2322)
// to allow mixed types => to declare this option explicitly:
// getFirstElement<number | string | boolean>([1, "a", true]); // function getFirstElement<string | number | boolean>(arr: (string | number | boolean)[]): string | number | boolean

// note re. T | undefined => added strictNullChecks for the case when array is empty 