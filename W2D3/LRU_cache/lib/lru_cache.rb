class LRUCache

  attr_reader :cache
  def initialize(max_size)
    @cache = []
    @max_size = max_size
  end

  def count
    # returns number of elements currently in cache
    @cache.count
  end

  def add(el)
    # adds element to cache according to LRU principle
    self.check_length
    if element_exists?(el)
      most_recently_used(el)
    else
      @cache.push(el)
    end
  end

  def show
    # shows the items in the cache, with the LRU item first
    print @cache
  end

  def check_length
    @cache.shift if @cache.count >= @max_size
  end

  private

  def element_exists?(ele)
    @cache.include?(ele)
  end

  def most_recently_used(ele)
    element = @cache.delete(ele)
    @cache.push(element)
  end
end

if $PROGRAM_NAME == __FILE__
  johnny_cache = LRUCache.new(4)

  johnny_cache.add("I walk the line")
  johnny_cache.add(5)

  johnny_cache.count # => returns 2

  johnny_cache.add([1,2,3])
  johnny_cache.add(5)
  johnny_cache.add(-5)
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.add([1,2,3,4])
  johnny_cache.add("I walk the line")
  johnny_cache.add(:ring_of_fire)
  johnny_cache.add("I walk the line")
  johnny_cache.add({a: 1, b: 2, c: 3})
  johnny_cache.show
end