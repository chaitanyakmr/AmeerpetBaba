using MongoDB.Driver;
using MongoDB.Driver.Core;

namespace ameerpetBaba.API.DbContext
{
    public interface IDbContext<T>
    {
        IMongoDatabase Database { get; }
        IMongoCollection<T> Collection { get; }
        void setCollection(string collectionName);
        void RegisterMapIfNeeded<TClass>();
    }
}