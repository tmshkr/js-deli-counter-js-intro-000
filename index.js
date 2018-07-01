var katzDeli = []

function takeANumber(queue, name){
    var position = queue.push(name)
    return `Welcome, ${name}. You are number ${position} in line.`
}
