class Map
  attr_accessor :map
  
  def initialize
    @map = Array.new
  end

  def set(key, val)
    @map.each do |pair|
      if pair.first == key
        pair[1] = val
        return pair
      end
    end
    @map << [key, val]
  end

  def get(key)
    @map.each do |pair| 
      return pair.last if pair.first == key
    end
    nil
  end

  def delete(key)
    @map.each do |pair|
      @map.delete(pair) if pair.first == key 
    end
    @map
  end
  
  def show
    @map
  end

end

a = Map.new

a.set("key1", "val1")
a.set("key2", "val2")
a.set("key3", "val3")
a.set("key4", "val4")
a.set("key5", "val5")
p a.show
p a.get("key3")
p a.delete("key2")
p a.set("key1", "val2")
p a.show