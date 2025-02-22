export default function logger(reducer) {
    return (preState, action, args) => {
        // console.group(action);
        // console.log('Prev State', preState);
        const nextState = reducer(preState, action, args);
        // console.log('Next State', nextState);
        // console.log('Arguments', args)
        // console.groupEnd();
        return nextState;
    }
}