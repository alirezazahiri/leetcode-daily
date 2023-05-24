def humanReadableVolume(volumes):
    result = []
    
    for volume in volumes:
        if volume < 1024:
            result.append(f"{volume}B")
        elif volume < 1024*1024:
            result.append(f"{volume//1024}KiB")
        else:
            result.append(f"{(volume//1024)//1024}MiB")
    
    return result


k = int(input())
volumes = []

for i in range(k):
    volume = int(input())
    volumes.append(volume)

hrVolumes = humanReadableVolume(volumes)

for hrVolume in hrVolumes:
    print(hrVolume)
