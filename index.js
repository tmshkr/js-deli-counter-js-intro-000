var katzDeli = []

function takeANumber(queue, name){
    var position = queue.push(name)
    return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(){
    var name = katzDeli.shift()
    if (name === undefined)
        return 'There is nobody waiting to be served!'
    else return name
}
