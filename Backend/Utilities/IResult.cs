using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Utilities
{
    public interface IResult
    {
        bool Success { get; }
        string Message { get; }
    }
}
