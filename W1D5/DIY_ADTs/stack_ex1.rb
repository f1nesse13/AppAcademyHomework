class Stack
  attr_reader :stack

  def initialize
    @stack = Array.new
  end

  def push(el)
    @stack.push(el)
    el
  end

  def pop
    @stack.pop
  end

  def peek
    @stack.last
  end
end

a = Stack.new

a.push("ele1")
a.push("ele2")
a.push("ele3")
a.push("ele4")
p a.push("ele5")
 a.pop
p a.push("ele6")
 a.pop
p a.peek
 a.pop
p a.peek
p a.stack