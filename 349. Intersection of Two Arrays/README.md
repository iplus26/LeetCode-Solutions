# 349 && 350. Intersection of Two Arrays 解题小记

这两道题差不多，区别在于 II 要求在返回的数组中，重复数值出现的次数也应该有所体现，在我看来这让这道题更简单了。

在 JavaScript 的实现中，我使用了哈希表来做。首先遍历两个数组，将在第一个数组中出现的数记录在 map 中。

    for (i = 0, len = nums1.length; i < len; i++) {
        map[nums1[i]] = 1;
    }

在遍历第二个数组的时候，不能直接将重复的数 push 进 ret 数组，因为第一道题 (349) 只需要重复数出现一次。

    for (len = nums2.length, i = 0; i < len; i++) {
        map[nums1[i]] = (++map[nums1[i]]) || 1;
        // if (map[nums2[i]] === 1) {
        //    ++map[nums2[i]];
        // }
    }
    for (var prop in map) {
        if (map.hasOwnProperty(prop) && map[prop] === 2) {
            ret.push(parseInt(prop));
        }
    }

第二道题 (350) 就直接很多，不需要再遍历一遍筛选出重复数，而是直接 push 进 ret 数组即可。

    for (len = nums2.length, i = 0; i < len; i++) {
        if (--map[nums2[i]] >= 0) {
            ret.push(nums2[i]);
        }
    }
