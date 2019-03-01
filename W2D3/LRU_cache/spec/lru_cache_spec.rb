require 'rspec'
require 'lru_cache'

describe LRUCache do
  subject(:cache) { LRUCache.new(3) }

  describe '#initialize' do
    it 'initializes with a empty array' do
      expect(cache.cache).to eq([])
    end
  end

  describe '#add' do
    before(:each) { cache.add(5) }
    it 'adds the correct element' do
      expect(cache.cache).to eq([5])
    end

    it 'adds more than one element' do
      cache.add(6)
      expect(cache.cache).to eq([5, 6])
    end

    it 'will keep array size under cache size' do
      cache.add(1)
      cache.add(2)
      cache.add(3)
      cache.add(4)
      expect(cache.cache).to eq([2, 3, 4])
    end
  end

  describe '#count' do
    it 'returns the correct number of elements' do
      cache.add(1)
      expect(cache.count).to_not eq(0)
    end
  end


end