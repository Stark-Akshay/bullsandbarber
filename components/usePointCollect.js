import { useState, useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import { pointRef } from '../firebase';
import { useAuth } from '../Auth';

const usePointCollect = () => {
  const [point, setPoint] = useState(0);
  const { currentUser } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(pointRef, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.doc.data().phonenumber === currentUser.phoneNumber) {
          setPoint(change.doc.data().point);
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
