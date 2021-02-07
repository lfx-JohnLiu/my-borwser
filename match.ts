interface StateMachine {
    (c: string): StateMachine;
}

function match(string: string): boolean {
    let state = start
    for (let c of string) {
        state = state(c)
    }
    return state === end
}

const end: StateMachine = (c: string) => {
    return end
}

const start: StateMachine = (c: string): StateMachine => {
    if (c === 'a') 
        return foundA
    else 
        return start
}

const foundA: StateMachine = (c: string): StateMachine => {
    if (c === 'b')
        return foundB
    else 
        start
}

const foundB: StateMachine = (c: string): StateMachine => {
    if (c === 'c')
        return foundC
    else 
        start
}

const foundC: StateMachine = (c: string): StateMachine => {
    if (c === 'd')
        return foundD
    else 
        start
}

const foundD: StateMachine = (c: string): StateMachine => {
    if (c === 'e')
        return foundE
    else 
        start
}

const foundE: StateMachine = (c: string): StateMachine => {
    if (c === 'f')
        return foundF
    else 
        start
}

const foundF: StateMachine = (c: string): StateMachine => {
    if (c === 'b')
        return end
    else 
        start
}

const test = match('abcdef')
console.log(test)
