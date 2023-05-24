/**
 *
 * @param {number[]} volumes
 * @return {number}
 */
function humanReadableVolume(volumes) {
  let result = [];
  for (const volume of volumes) {
    if (volume < 1024) result.push(`${volume}B`);
    else if (volume < 1024 * 1024)
      result.push(`${Math.floor(volume / 1024)}KiB`);
    else result.push(`${Math.floor(volume / 1024 / 1024)}MiB`);
  }
  return result;
}


console.log(humanReadableVolume([19, 1401, 14510629]));