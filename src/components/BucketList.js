import React, { useState } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
    const [bucket, setBucket] = useState([]);

    const addBucketItem =(item)=>{
        console.log(
            '🚀 ~ file: BucketList.js ~ line 10 ~ addBucketItem ~ item',
            item
          );
          if (!item.text) {
            return;
          }
          const newBucket = [...bucket, item];
          setBucket(newBucket)
    }

    const completeBucketItem =(id)=>{
        let updatedBucket = bucket.map((item)=>{
            if(item.id === id){
                item.isComplete = !item.isComplete;
            }
            return item
        })
        setBucket(updatedBucket)
    }

    const editBucketItem =(itemId, newValue)=>{
        setBucket((prev)=>{
            prev.map((item)=>{
                return item.id === itemId ? newValue: item;
            })
        })
    }

    const removeBucketItem = (id)=>{
        const updatedBucket = [...bucket].filter((item)=>{
            return item.id !== id;
        })
        setBucket(updatedBucket)
    }
    return(
        <div>
            <h1>what is your bucket list</h1>
            <BucketForm onSubmit={addBucketItem}></BucketForm>
            <Bucket bucket={bucket}
            completeBucketItem = {completeBucketItem}
            editBucketItem = {editBucketItem}
            removeBucketItem = {removeBucketItem} ></Bucket>
        </div>
    )

}
export default BucketList;