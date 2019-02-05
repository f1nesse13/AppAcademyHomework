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

tiles_array = ["up", "right-up", "right", "right-down", "down", "left-down", "left",  "left-up" ]

def slow_dance(direction, arr) # O(n)
  arr.each_with_index do |tile, i|
    return i if tile == direction
  end
end

def fast_dance(direction, arr) # O(1)
  return arr.index(direction)
end
