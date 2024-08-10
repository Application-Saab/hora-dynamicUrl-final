import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const Failure = () => {
    const router = useRouter();
    return (
        <div className="container">
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 text-center">
                <div className="alert alert-danger text-center">
                    <h4 className="alert-heading">Oops, something went wrong!</h4>
                </div>
                <Link href='/'>Back to Home</Link>
            </div>
          </div>
        </div>
      );
}

export default Failure