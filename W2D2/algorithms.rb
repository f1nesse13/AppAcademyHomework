example_array = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish', 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh']
def sluggish_octopus(arr)
  arr.each do |el|
    return el unless arr.any? { |element| element.length > el.length }
  end
end

# def dominant_octopus(arr)
#   return arr if arr.empty?
#   mid = arr.length / 2
#   left = arr[0..mid]
#   right = arr[mid..-1]

#   dominant_octopus(left) + mid + dominant_octopus(right)
#   return arr.last
# end

def clever_octopus(arr)
  long = arr.first
  arr.each do |ele|
    long = ele > long ? ele : long
  end
  long
end

p sluggish_octopus(example_array)
p dominant_octopus(example_array)
p clever_octopus(example_array)