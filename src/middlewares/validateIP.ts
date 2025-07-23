import { NextFunction, Request, Response } from 'express';
import geoip from 'geoip-lite';

class validateIpClass {
  public validateIpFunction(ipAddresses: string[] = []) {
    return (req: Request, res: Response, next: NextFunction) => {
      const xForwardedFor = req.headers['x-forwarded-for'];
      const clientIp = Array.isArray(xForwardedFor)
        ? xForwardedFor[0]
        : xForwardedFor?.split(',')[0] || req.socket.remoteAddress;

      if (!clientIp) {
        return res.status(400).json({ message: 'clientIp not found' });
      }

      const normalizedIp = clientIp.replace('::ffff:', '');

      const isLocalhost = normalizedIp === '127.0.0.1' || normalizedIp === '::1';

      if (isLocalhost) {
        return next();
      }

      const validIp = geoip.lookup(clientIp);

      if (!validIp) {
        return res.status(400).json({ message: 'validIp not found' });
      }

      const countryFound = validIp.country;

      if (!ipAddresses.includes(countryFound)) {
        return res.status(400).json({ message: 'not a valid ip' });
      }

      next();
    };
  }
}

export default validateIpClass;
