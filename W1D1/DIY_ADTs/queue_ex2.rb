class Queue

  attr_reader :queue

  def initialize
    @queue = Array.new
  end

  def enqueue(el)
    @queue.push(el)
    el
  end
  
  def dequeue
    @queue.shift
  end

  def peek
    @queue.first
  end

end

a = Queue.new

a.enqueue("item1")
a.enqueue("item2")
a.enqueue("item3")
a.enqueue("item4")
a.enqueue("item5")
p a.enqueue("item6")
a.dequeue
a.dequeue
p a.peek
p a.queue