class LRUCache
  def initialize(max_size)
    @cache = []
    @max_size = max_size
  end

  def count
    # returns number of elements currently in cache
    @cache_size.count
  end

  def add(el)
    # adds element to cache according to LRU principle
    @cache.check_length
    @cache.push(el)
  end

  def show
    # shows the items in the cache, with the LRU item first
    print @cache
  end

  private
  # helper methods go here!

  def check_length
    @cache.shift if @cache.count >= @max_size
  end
end