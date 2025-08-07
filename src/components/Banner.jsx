import React from 'react';

const Banner = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between', 
      background: 'linear-gradient(to right, #2c3e50, #3498db)', 
      padding: '40px 60px', 
      fontFamily: '"Roboto", sans-serif', 
      fontSize: '32px', 
      color: '#ffffff', 
      textAlign: 'right',
      textTransform: 'uppercase',
      fontWeight: 700, 
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', 
      height: '120px', 
      position: 'relative',
      borderBottom: '2px solid rgba(255, 255, 255, 0.2)', 
      overflow: 'hidden',
      zIndex: 1,
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 75%, transparent)',
        backgroundSize: '30px 30px', 
        zIndex: -1,
      }} />
      {/* Placeholder for a logo or icon on the left */}
      <div style={{
        width: '80px',
        height: '80px',
        background: 'rgba(255, 255, 255, 0.2)', 
        borderRadius: '50%', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontSize: '24px',
        marginLeft: '20px',
      }}>
        MH

      </div>
      <span style={{ marginRight: '20px' }}>It's a Banner Image</span>
    </div>
  );
};

export default Banner;