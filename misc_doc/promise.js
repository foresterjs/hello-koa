function mongoFindAll(collection, opts) {
    return new Promise(function (resolve, reject) {
        db.collection(collection).find(opts, function (err, data) {
            if (err) {
                reject(err);
                return;
            }

            resolve(data);
        });
    })
}


function mongo_find_all (collection, opts) {
    var defer = Promise.defer();

    db.collection(collection).find(opts, function (err, data) {
        if (err) {
            defer.reject(err);
            return;
        }

        defer.resolve(data);
    });

    return defer.promise;
}
