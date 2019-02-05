example_array = ['fish', 'fiiish', 'fiiiiish', 'fiiiissshhhhhh', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh']

def sluggish_octopus(arr) # O(n^2)
  arr.each do |el|
    return el unless arr.any? { |element| element.length > el.length }
  end
end

def dominant_octopus(arr) # O(log n)
  return arr if arr.count <= 1
  mid = arr.length / 2
  left = arr[0...mid]
  right = arr[mid..-1]
  merge(dominant_octopus(left), dominant_octopus(right))
end

def merge(left, right)
  sorted = []
  until left.empty? || right.empty?
    sorted << (left.first.length < right.first.length ? left.shift : right.shift)
  end
  sorted + left + right
end

def clever_octopus(arr) #O(n)
  long = arr.first
  arr.each do |ele|
    long = ele.length > long.length ? ele : long
  end
  long
end

p sluggish_octopus(example_array)
p dominant_octopus(example_array).last
p clever_octopus(example_array)

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(arr)
  
end