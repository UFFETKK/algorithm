import re
def solution(new_id):
    id = new_id.lower()
    id = re.sub('[^a-z0-9\-_.]', '', id)
    id = re.sub('\.+', '.', id)
    id = re.sub('^[.]|[.]$', '', id)
    id = 'a' if len(id) == 0 else id[:15]
    id = re.sub('^[.]|[.]$', '', id)
    if len(id)<=2 : id = id.ljust(3,id[len(id)-1])
    return id
