var katzDeli = []

function takeANumber(queue, name){
    var position = queue.push(name)
    return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(queue){
    var name = queue.shift()
    if (name === undefined)
        return 'There is nobody waiting to be served!'
    else return `Currently serving ${name}.`
}

function currentLine(queue){
    if (queue.length === 0)
        return 'The line is currently empty.'
    var queueString = 'The line is currently: 1. '
    for (let i = 0; i < queue.length; i++){
        queueString += queue[i]
        if (i < queue.length - 1)
        queueString += ` ${i + 1}. `
    }
    return queueString
}
