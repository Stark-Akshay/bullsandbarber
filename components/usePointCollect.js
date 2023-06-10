
import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { pointRef } from '../firebase';
import { useAuth } from '../Auth';

const usePointCollect = () => {
  const [point, setPoint] = useState(0);
  const { currentUser } = useAuth();

  useEffect(() => {
    let nowUser = currentUser.phoneNumber?currentUser.phoneNumber:currentUser.email;
    const unsubscribe = onSnapshot(pointRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.doc.data().phonenumber === nowUser) {
          // console.log(change.doc.data().phoneNumber);
          // console.log(currentUser.phoneNumber);
          setPoint(change.doc.data().point);
          // console.log(change.doc.data().point);
        }
      });
    });

    return () => {
      unsubscribe();
    };
  }, [currentUser.phoneNumber]);

  return point;
};

export default usePointCollect;
