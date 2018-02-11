def has_cycle(head):
    currentNode = head
    seen = set()
    while currentNode:
        if currentNode in seen:
            return True
        seen.add(currentNode)
        currentNode = currentNode.next
    return False
