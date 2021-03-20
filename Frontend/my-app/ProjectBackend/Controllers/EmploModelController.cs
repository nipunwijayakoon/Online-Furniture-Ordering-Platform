using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectBackend.Controllers
{
    public class EmploModelController : Controller
    {
        // GET: EmploModelController
        public ActionResult Index()
        {
            return View();
        }

        // GET: EmploModelController/Details/5
        public ActionResult Details(int id)
        {
            return View();
        }

        // GET: EmploModelController/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: EmploModelController/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create(IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: EmploModelController/Edit/5
        public ActionResult Edit(int id)
        {
            return View();
        }

        // POST: EmploModelController/Edit/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }

        // GET: EmploModelController/Delete/5
        public ActionResult Delete(int id)
        {
            return View();
        }

        // POST: EmploModelController/Delete/5
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Delete(int id, IFormCollection collection)
        {
            try
            {
                return RedirectToAction(nameof(Index));
            }
            catch
            {
                return View();
            }
        }
    }
}
