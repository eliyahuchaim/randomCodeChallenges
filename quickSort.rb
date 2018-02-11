arr = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8]


def quickSort(array)

  if array.length < 2
    return array
  end

  pivot = array.shift()
  lesser = []
  greater = []

  array.each do |el|
    if el < pivot
      lesser << el
    else
      greater << el
    end
  end

  lower = quickSort(lesser)
  higher = quickSort(greater)
  result = lower + [pivot] + higher
  return result
end


quickSort(arr)
